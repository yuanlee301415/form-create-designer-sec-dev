/*
* 组件配置》基础配置 - 配置数据
* */

export default function field() {
    return [
        {
            type: 'input',
            field: 'field',
            value: '',
            title: '字段 ID',
        }, {
            type: 'input',
            field: 'title',
            value: '',
            title: '字段名称',
        }
    ];
}