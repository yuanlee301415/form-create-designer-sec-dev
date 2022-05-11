/*
* 组件》浮点型输入框 - 配置数据
* */

import uniqueId from '@form-create/utils/lib/unique';

const label = '浮点型输入框';
const name = 'fc-float';

export default {
    label,
    name,
    rule() {
        return {
            type: name,
            field: uniqueId(),
            title: label,
            props: {},
            dataTypes: ['number']
        };
    },
    props() {
        return [
            {type: 'switch', field: 'readonly', title: '是否只读'},

            {type: 'inputNumber', field: 'scale', title: '精度', props: { min: 0, step: 1, stepStrictly: true }},

            {
                type: 'el-alert',
                props: {
                    type: 'warning',
                    title: '提示',
                    description: '支持输入整数和小数',
                    closable: false,
                    showIcon: true

                }
            }
        ];
    }
};
