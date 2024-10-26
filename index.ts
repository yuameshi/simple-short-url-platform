// 使用DOM API获取页面中的元素
const form = <HTMLFormElement>document.getElementById('form-generate');
const inputLink = <HTMLInputElement>document.getElementById('input-link');
const linkResult = <HTMLParagraphElement>document.getElementById('link-result');
const shortLink = <HTMLAnchorElement>document.getElementById('short-link');

// 为表单提交事件添加处理函数
form?.addEventListener('submit', async (e) => {
	// 阻止表单默认的提交事件
	e.preventDefault();

	// 获取用户输入的原始链接
	const originalLink = inputLink.value;

	// 在这里处理原始链接，生成短链接
	// 这里假设已经生成了一个短链接，结果保存在变量shortLinkValue中
	const XHR = new XMLHttpRequest();
	XHR.open('POST', 'https://呃呃.top/');
	XHR.addEventListener('load', () => {
		const shortLinkValue = XHR.responseText;
		// 更新页面中的短链接显示区域
		shortLink.href = shortLinkValue;
		shortLink.innerText = shortLinkValue;
		linkResult?.classList.remove('mdui-hidden');

		// 清空表单中的输入
		inputLink.value = '';
		mdui.refreshTextFields();
	});
	XHR.send(originalLink);
});
