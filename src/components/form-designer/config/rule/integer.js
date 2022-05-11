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
            info: '',
            props: {}
        };
    },
    props() {
        return [
            {type: 'switch', field: 'readonly', title: '是否只读'}
        ];
    }
};
