/*
* 组件》输入框 - 配置数据
* */

import uniqueId from '@form-create/utils/lib/unique';

const label = '输入框';
const name = 'input';

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
            props: {},
            dataTypes: ['string']
        };
    },
    props() {
        return [
            {type: 'switch', field: 'readonly', title: '是否只读'},
        ];
    }
};
