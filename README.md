# CN_Kindle_Goodbye.js
代码部分由ChatGPT独立完成，我负责提想法，它负责写。2023年7月5日，亲测有效。将代码复制到浏览器的控制台，回车。


通过分析页面的HTML属性，提出需求：
1. 遍历在浏览器页面中所有的【勇士区域】，其特征为`class="DigitalEntitySummary-module__container_3pUojes0Jk94VKwEcoGXyq"`。
2. 在每个【勇士区域】内，找到ID特征为`id="content-image-B07DKC1Z9V"`的子元素（其中"B07DKC1Z9V"是变量，我们称之为【bookName】）。
3. 使用找到的【bookName】作为参数，定位并点击【usb按钮】。【usb按钮】的特征为`id="DOWNLOAD_AND_TRANSFER_ACTION_" + bookName`。
4. 在【usb按钮】被点击后，定位并点击【小圆圈】，其特征为`class="RadioButton-module_radio__1k8O3"`。
5. 等待1秒后，定位并点击【下载按钮】。【下载按钮】的特征为`id="DOWNLOAD_AND_TRANSFER_ACTION_" + bookName + "_CONFIRM"`。
6. 【下载按钮】点击后，会弹出【成功窗口】，其特征为`id="notification-success"`。在【成功窗口】出现后，点击其子元素【关闭按钮】，其特征为`id="notification-close"`。
7. 这一系列操作需要在页面的所有【勇士区域】上进行，且要确保不会重复下载相同的内容。
8. 当一个页面的所有【勇士区域】都被处理过后，脚本需要自动翻页到下一个页面，直到所有的页面都被处理过。页面的状态可以通过`class="page-item active"`和`class="page-item"`来识别。
