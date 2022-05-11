import draggable from 'vuedraggable';
import unique from '@form-create/utils/lib/unique';
import FcEditor from '@form-create/component-wangeditor';

import FcDesigner from './components/FcDesigner.vue';
import DragTool from './components/DragTool.vue';
import Struct from './components/Struct.vue';
import Fetch from './components/Fetch.vue';
import Validate from './components/Validate.vue';
import DragBox from './components/DragBox.vue';
import Required from './components/Required.vue';
import TableOptions from './components/TableOptions.vue';
import TestComponent from './components/custom/Test'
import Unsupported from './components/custom/Unsupported';
import Integer from './components/custom/Integer';

import {designerForm} from './utils/form';
import {makeOptionsRule} from './utils/index';
import formCreate from './utils/form';
import './style/index.css';

designerForm.component('draggable', draggable);
designerForm.component('DragTool', DragTool);
designerForm.component('DragBox', DragBox);
designerForm.component('Validate', Validate);
designerForm.component('Struct', Struct);
designerForm.component('Fetch', Fetch);
designerForm.component('Required', Required);
designerForm.component('TableOptions', TableOptions);
designerForm.component('FcEditor', FcEditor);
formCreate.component('FcEditor', FcEditor);

designerForm.component('TestComponent', TestComponent)
formCreate.component('TestComponent', TestComponent)

designerForm.component('FcUnsupported', Unsupported)
formCreate.component('FcUnsupported', Unsupported)

designerForm.component('FcInteger', Integer)
formCreate.component('FcInteger', Integer)

designerForm.register('_fc', {
    init(fc, rule) {
        rule._id = unique();
        if (fc.repeat)
            rule.field = unique();
        if (fc.value) {
            rule.effect._fc = false;
        }
    }
});

designerForm.register('_fc_tool', {
    init(_, rule) {
        rule.props.unique = unique();
    }
});

FcDesigner.install = function (Vue) {
    Vue.component('FcDesigner', FcDesigner);
};

FcDesigner.makeOptionsRule = makeOptionsRule;

export default FcDesigner;

export {formCreate, designerForm};