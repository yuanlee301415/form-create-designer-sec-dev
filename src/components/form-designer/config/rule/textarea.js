/*
* 组件》多行输入框 - 配置数据
* */

import uniqueId from '@form-create/utils/lib/unique';

const label = '多行输入框';
const name = 'fc-textarea';

export default {
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
            {type: 'switch', field: 'readonly', title: '是否只读'},
            {type: 'inputNumber', field: 'rows', title: '输入框行数'},
        ];
    }
};
