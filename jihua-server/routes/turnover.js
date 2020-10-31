const express = require('express');
const router = express.Router();
const Turnover = require('../model/turnover')

// 查询流水
router.get('/', async (req, res, next) => {
    let date = new Number(req.query.date)
    const flows = []
    for (let i = 0; i < 5; i += 1) {
        let queryDate = dateFormat(date)
        console.log(queryDate)
        const dateRecord = {
            date: queryDate,
            expend: [],
        }
        // 查询某一天
        const records = await Turnover.find({
            date: queryDate
        })
        for (let j = 0; j < records.length; j += 1) {
            const temp = {
                cost: records[j].cost,
                fid: records[j]._id,
                typeId: records[j].typeId,
                remarks: records[j].remarks
            }
            dateRecord.expend.push(temp)
        }
        flows.push(dateRecord)
        date -= 1000 * 24 * 3600
    }
    // console.log(flows)
    res.send({
        error_code: 0,
        flows
    })

});

// 添加流水
router.post('/', async (req, res, next) => {
    const date = dateFormat(req.body.date)
    const record = await Turnover.findOne({
        date: date,
        typeId: req.body.typeId
    })
    console.log(date)
    console.log(record)
    if (record) {
        // 查询当天是否已经有这个类别的记录
        // 更新这个记录
        // const recordTest = await Turnover.find()
        const update = {
            $set: { cost: req.body.cost }
        }
        const updateRecord = await Turnover.updateOne({
            typeId: req.body.typeId
        }, update);
        if (updateRecord.ok) {
            const nowRecord = await Turnover.findOne({
                date: date,
                typeId: req.body.typeId
            })
            res.send({
                error_code: 0,
                data: {
                    msg: "success",
                    fid: nowRecord._id
                }
            })
        } else {
            res.send({
                msg: 'error'
            })
        }
    } else {
        // 新类别
        const tempVar = req.body
        tempVar.date = date
        const newRecord = await new Turnover(tempVar).save()
        res.send({
            error_code: 0,
            data: {
                msg: "success",
                fid: newRecord._id
            }
        })
    }
})

// 修改流水
router.put('/', async (req, res, next) => {
    // 查询流水是否存在
    const queryDate = dateFormat(req.body.date)
    const record = await Turnover.findOne({
        date: queryDate,
        typeId: req.body.typeId
    })
    if (record) {
        // 存在记录 修改记录
        const updateObj = {}
        if (req.body.cost) {
            updateObj.cost = req.body.cost
        }
        if (req.body.remarks) {
            updateObj.remarks = req.body.remarks
        }
        const update = {
            $set: updateObj
        }
        if (JSON.stringify(updateObj) !== "{}") {
            // 并不更新为空
            console.log('in update')
            const updateRecord = await Turnover.updateOne({
                typeId: req.body.typeId,
                date: dateFormat(req.body.date)
            }, update);

            console.log(updateRecord)

            res.send({
                error_code: 0,
                msg: 'success'
            })
            return;
        }
    }
    res.send({
        error_code: 40000,
        msg: "record update error !"
    })
})

// 删除流水
router.delete('/', async (req, res, next) => {
    const record = await Turnover.findOne({
        _id: req.query.fid
    })
    console.log(record)
    if (record) {
        // 存在记录 删除记录
        const deleteRecord = await Turnover.deleteOne({
            _id: req.query.fid
        })
        console.log(deleteRecord)
        res.send({
            error_code: 0,
            msg: 'success'
        })
    } else {
        res.send({
            error_code: 40001,
            msg: 'record not exist'
        })
    }
})

function dateFormat(date) {
    // date 时间戳
    // 返回20201212此格式的字符
    const time = new Date(Number(date))
    return `${time.getFullYear()}${time.getMonth() + 1}${time.getDate()}`
}

module.exports = router;
