import { shallowMount, mount, createLocalVue } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';
import Dialog from '@/components/templates/Dialog.vue';
import ElementUI, { Button } from 'element-ui';

const localVue = createLocalVue();
localVue.use(ElementUI);

describe('Dialog.vue', () => {
  it('ダイアログを起動し、保存ボタンがあること', async () => {
    const wrapper = mount(Dialog, {
      localVue,
    });
    wrapper.setData({ visible: true });
    await wrapper.vm.$nextTick();

    //ダイアログがbodyに追加されるのでbodyからDOMを取得　
    const elDialog = document.getElementsByClassName('el-dialog__wrapper')[0];
    const buttons = elDialog.getElementsByClassName('el-button');

    let saveButton = null;
    const len = buttons.length;

    for (let i = 0; i < len; i++) {
      const button = buttons[i];
      if (button && button.textContent === "保存") {
        saveButton = button;
      }
    }

    expect(saveButton).toBeTruthy;
  })
})