/*
* 组件》输入框 - 配置数据
* */

import uniqueId from '@form-create/utils/lib/unique';

const label = '整型输入框';
const name = 'fc-integer';

export default {
    icon: 'icon-input',
    label,
    name,
    rule() {
        return {
            type: name,
            field: uniqueId(),
            title: label,
            props: {}
        };
    },
    props() {
        return [
            {type: 'switch', field: 'readonly', title: '是否只读'},

            {
                type: 'el-alert',
                props: {
                    type: 'warning',
                    title: '提示',
                    description: '只支持输入整数',
                    closable: false,
                    showIcon: true

                }
            }
        ];
    }
};
