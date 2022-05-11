/*
* 组件》选择器 - 配置数据
* */

import uniqueId from '@form-create/utils/lib/unique';
import {makeOptionsRule, makeRequiredRule} from '../../utils/index';

const label = '选择器';
const name = 'select';

export default {
    icon: 'icon-select',
    label,
    name,
    rule() {
        return {
            type: name,
            field: uniqueId(),
            title: label,
            info: '',
            effect: {
                fetch: ''
            },
            props: {},
            options: []
        };
    },
    props() {
        return [
            {type: 'switch', field: 'disabled', title: '是否禁用'},

            {type: 'input', field: 'enumTypeCode', title: '关联字典', props: { disabled: true }},

            {type: 'switch', field: 'multiple', title: '是否多选'},

            {type: 'inputNumber', field: 'multipleLimit', title: '多选时用户最多可以选择的项目数，为 0 则不限制'},

            {type: 'switch', field: 'filterable', title: '是否可搜索'},

            {type: 'input', field: 'noMatchText', title: '搜索条件无匹配时显示的文字'},

            {type: 'input', field: 'noDataText', title: '选项为空时显示的文字'}
        ];
    }
};
