/* Copyright (c) 2026 HOMO AI. Proprietary. License required. Contact: 16208204@qq.com */
const assert = require('assert');
const { SecureMCPServer } = require('../server');
let p=0,f=0;
function t(n,fn){try{fn();p++;console.log(`  ✅ ${n}`)}catch(e){f++;console.log(`  ❌ ${n}: ${e.message}`)}}
console.log('\n📋 HOMO MCP Secure 测试\n');
const s = new SecureMCPServer();
t('初始化', ()=>assert.ok(s.engineType === 'cloakbrowser'));
t('5个工具', ()=>assert.equal(s.getToolDefinitions().length, 5));
t('browser_see 存在', ()=>assert.ok(s.getToolDefinitions().find(d=>d.name==='browser_see')));
t('browser_navigate 存在', ()=>assert.ok(s.getToolDefinitions().find(d=>d.name==='browser_navigate')));
t('所有工具有 desc', ()=>s.getToolDefinitions().forEach(d=>assert.ok(d.desc)));
t('所有工具有 params', ()=>s.getToolDefinitions().forEach(d=>assert.ok(d.params)));
t('browser_navigate 需要 url', ()=>assert.ok(s.getToolDefinitions().find(d=>d.name==='browser_navigate').params.url));
t('browser_type 需要 text', ()=>assert.ok(s.getToolDefinitions().find(d=>d.name==='browser_type').params.text));
console.log(`\n📊 MCP Secure: ${p} ✅ / ${f} ❌ / ${p+f} 总计\n`);
process.exit(f>0?1:0);
