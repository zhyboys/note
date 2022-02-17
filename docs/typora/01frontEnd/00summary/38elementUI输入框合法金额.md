# 38 elementUI输入框合法金额

效果：输入字符串直接变没，最多只能输入两位小数。

```html
<el-input v-model="ruleForm.freeSum" 
@keyup.native="ruleForm.freeSum = ruleForm.freeSum.replace(/[^\d.]/g,'');
                ruleForm.freeSum = ruleForm.freeSum.replace(/\.{2,}/g,'.');
                ruleForm.freeSum = ruleForm.freeSum.replace(/^\./g,'');
                ruleForm.freeSum = ruleForm.freeSum.replace('.','$#$').replace(/\./g,'').replace('$#$','.');
                ruleForm.freeSum = ruleForm.freeSum.replace(/^(\-)*(\d+)\.(\d\d).*$/,'$1$2.$3');
              " />
```

