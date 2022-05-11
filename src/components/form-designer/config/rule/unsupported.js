/*
* 组件》Unsupported - 配置数据
* */

import uniqueId from '@form-create/utils/lib/unique'

const label = 'Unsupported';
const name = 'fc-unsupported';

export default {
    label,
    name,
    rule() {
        return {
            type: name,
            field: uniqueId(),
            title: label,
            dataTypes: ['un']
        };
    },
    props() {
        return [];
    }
};
