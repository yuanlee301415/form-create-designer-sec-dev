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
            props: {
                disabled: true
            }
        }, {
            type: 'input',
            field: 'title',
            value: '',
            title: '字段名称',
            props: {
                disabled: true
            }
        }, {
            type: 'input',
            field: 'unit',
            value: '',
            title: '单位',
            props: {
                disabled: true
            }
        }
    ];
}