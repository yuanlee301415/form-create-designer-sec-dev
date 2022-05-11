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
        },
        {
            type: 'input',
            field: 'title',
            value: '',
            title: '字段名称',
            props: {
                disabled: true
            }
        },
        {
            type: 'input',
            field: 'dataDefaultValue',
            value: '',
            title: '默认值',
            props: {
                disabled: true
            }
        },
        {
            type: 'input',
            field: 'unit',
            value: '',
            title: '单位',
            props: {
                disabled: true
            }
        },
        {
            type: 'switch',
            field: 'uniqueKey',
            value: '',
            title: '是否主键',
            props: {
                disabled: true
            }
        },
        {
            type: 'switch',
            field: 'index',
            value: '',
            title: '是否索引',
            props: {
                disabled: true
            }
        },
        {
            type: 'switch',
            field: 'required',
            value: '',
            title: '是否必填',
            props: {
                disabled: true
            }
        },
        {
            type: 'switch',
            field: 'trackChange',
            value: '',
            title: '是否记录属性值变更',
            props: {
                disabled: true
            }
        }
    ];
}