# 一个简单的短链接生成平台

大部分代码由`OpenAI ChatGPT`编写（包括前后端），本人仅做了如下几点（亿点）修改

* 修改大量前端UI
* 完善请求后端API的逻辑
* 修复生成的后端的大量Bug和完善功能（包括使用SHA256生成短链接，使用KV存储数据等）

其中后端使用了Cloudflare Workers（使用KV存储数据），前端使用了Cloudflare Pages。

此Repo仅用于学习和个人存档使用，所以此处不放Usage了

> ChatGPT确实很好用，但是其局限性也比较大，他经常会凭空捏造出一些CFWorkers从未提供的方法，比如`self.kv_private`等。