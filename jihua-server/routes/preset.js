const express = require('express');
const router = express.Router();
const Preset = require('../model/preset')

// 添加流水
router.post('/', async (req, res, next) => {
  const tempVar = req.body
  // 数组需要转为字符串
  tempVar.frequent = JSON.stringify(tempVar.frequent);
  console.log(tempVar);
  const newRecord = await new Preset(tempVar).save()
  res.send({
    error_code: 0,
    data: {
      msg: "success",
      pid: newRecord._id
    }
  })
})


// 查看流水
router.get('/', async (req, res, next) => {
  const { page } = req.query
  const querys = await Preset.find().limit(10).skip(10 * (page - 1))
  const counts = await Preset.count()
  const resPre = {
    total: Math.floor(counts / 10) + 1,
    current: Number(page),
    presets: []
  }
  for (let i = 0; i < querys.length; i += 1) {
    const pre = {
      pid: querys[i]._id,
      typeId: querys[i].typeId,
      frequent: JSON.parse(querys[i].frequent)
    }
    resPre.presets.push(pre)
  }
  res.send(resPre)
})

// 修改预设
router.put('/', async (req, res, next) => {
  const { pid } = req.body
  // 查询预设是否存在
  const record = await Preset.findOne({
    _id: pid
  })
  if (record) {
    // 记录存在
    if (!req.body.typeId && !req.body.frequent) {
      res.send({
        error_code: '40003',
        mes: '预设无修改'
      })
    } else {
      const updateObj = {}
      // 修改预设
      if (req.body.typeId) {
        updateObj.typeId = req.body.typeId
      }
      if (req.body.frequent) {
        updateObj.frequent = req.body.frequent
      }
      const update = {
        $set: updateObj
      }
      if (JSON.stringify(updateObj) !== "{}") {
        // 并不更新为空
        const updateRecord = await Preset.updateOne({
          _id: pid
        }, update);

        res.send({
          error_code: 0,
          msg: 'success'
        })
        return;
      }
    }
  } else {
    res.send({
      error_code: '40003',
      mes: '预设不存在'
    })
  }
})


// 删除预设
router.delete('/', async (req, res, next) => {
  const record = await Preset.findOne({
    _id: req.query.pid
  })
  if (record) {
    // 存在记录 删除记录
    const deleteRecord = await Preset.deleteOne({
      _id: req.query.pid
    })
    res.send({
      error_code: 0,
      msg: 'success'
    })
  } else {
    res.send({
      error_code: 40003,
      msg: 'preset not exist'
    })
  }
})

module.exports = router;
