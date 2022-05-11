/*
* 组件配置》基础配置 - 配置数据
* */

export default function field() {
    return [
        {
            dataTypes: ['un', 'string', 'number', 'enum', 'datetime'],
            type: 'input',
            field: 'field',
            value: '',
            title: '字段 ID',
            props: {
                disabled: true
            }
        },
        {
            dataTypes: ['un', 'string', 'number', 'enum', 'datetime'],
            type: 'input',
            field: 'title',
            value: '',
            title: '字段名称',
            props: {
                disabled: true
            }
        },
        {
            dataTypes: ['string', 'number', 'enum', 'datetime'],
            type: 'input',
            field: 'dataDefaultValue',
            value: '',
            title: '默认值',
            props: {
                disabled: true
            }
        },
        {
            dataTypes: ['string', 'number', 'enum', 'datetime'],
            type: 'input',
            field: 'unit',
            value: '',
            title: '单位',
            props: {
                disabled: true
            }
        },
        {
            dataTypes: ['string', 'number', 'enum', 'datetime'],
            type: 'switch',
            field: 'uniqueKey',
            value: '',
            title: '是否主键',
            props: {
                disabled: true
            }
        },
        {
            dataTypes: ['string', 'number', 'enum', 'datetime'],
            type: 'switch',
            field: 'index',
            value: '',
            title: '是否索引',
            props: {
                disabled: true
            }
        },
        {
            dataTypes: ['string', 'number', 'enum', 'datetime'],
            type: 'switch',
            field: 'required',
            value: '',
            title: '是否必填',
            props: {
                disabled: true
            }
        },
        {
            dataTypes: ['string', 'number', 'enum', 'datetime'],
            type: 'switch',
            field: 'trackChange',
            value: '',
            title: '是否记录属性值变更',
            props: {
                disabled: true
            }
        },

        {
            dataTypes: ['enum'],
            type: 'input',
            field: 'enumTypeCode',
            title: '关联字典',
            props: {
                disabled: true
            }
        }
    ];
}