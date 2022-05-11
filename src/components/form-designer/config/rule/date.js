/*
* 组件》日期选择器 - 配置数据
* */

import uniqueId from '@form-create/utils/lib/unique';

const label = '日期选择器';
const name = 'datePicker';

export default {
    icon: 'icon-date',
    label,
    name,
    rule() {
        return {
            type: name,
            field: uniqueId(),
            title: label,
            info: '',
            props: {},
        };
    },
    props() {
        return [
            {type: 'switch', field: 'readonly', title: '是否只读'},

            {
                type: 'select',
                field: 'type',
                title: '显示类型',
                options: [
                    {label: 'year', value: 'year'},
                    {label: 'month', value: 'month'},
                    {label: 'date', value: 'date'},
                    {label: 'dates', value: 'dates'},
                    {label: 'week', value: 'week'},
                    {label: 'datetime', value: 'datetime'},
                    {label: 'datetimerange', value: 'datetimerange'},
                    {label: 'daterange', value: 'daterange'},
                    {label: 'monthrange', value: 'monthrange'}
                ]
            }
        ];
    }
};
