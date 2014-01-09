minTable
========

<strong>ENG:</strong>
<h3>Requirements</h3>
It's neccessary to use jQuery version 1.6.0 and higher

<h3>Description</h3>

This plugin allows to minimize a long table down to integer row number and to get short table view without any partial view of the last row.
To make a short-view of a table, you need to apply <code>minimize()</code> function to your table(-s):
<pre>$(&lt;identifier&gt;).minimize({<br>  min: 0,<br>  buttonText: ["Show", "Hide"],<br>  fixHeader: false,<br>  initialView: "short"<br>});</pre>

<h3>Parameters of the <code>minimize()</code> function</h3>

<table>
  <tbody>
    <tr>
      <th>Property</th>
      <th width="100">Type</th>
      <th width="110">Default meaning</th>
      <th>Description</th>
    </tr>
    <tr>
      <td>min</td>
      <td>integer</td>
      <td>0</td>
      <td>An amount of rows you want to show</td>
    </tr>
    <tr>
      <td>buttonText</td>
      <td>array</td>
      <td>["Show", "Hide"]</td>
      <td>A text inside a control button (the button is created automatically)</td>
    </tr>
    <tr>
      <td>initialView</td>
      <td>string</td>
      <td>"short"</td>
      <td>An initial state of your table, <code>short</code> or <code>full</code></td>
    </tr>
    <tr>
      <td>fixHeader</td>
      <td>boolean</td>
      <td>false</td>
      <td>Fixation of <code>&lt;thead&gt;</code> table element, if it exists: <code>true</code> when it's needed to be always fully shown, <code>false</code> when it can be partially hidden</td>
    </tr>
  </tbody>
</table>

<strong>Important.</strong> Don't forget to add css-file <code>minTable-base.css</code> into your code: it has basic styles to set more accurate view of final tables.
<br><br>
<strong>РУ:</strong>
<h3>Требования</h3>
Необходимо использовать библиотеку jQuery версии 1.6.0 и выше

<h3>Описание</h3>

Данный плагин позволяет сворачивать длинные таблицы до целого числа строк. При этом в таком свернутом состоянии строки показываются полностью, без "обрезания" последней строки по высоте.
<br>Для этого вам нужно привязать функцию <code>minimize()</code> к вашей(-им) таблице(-ам):
<pre>$(&lt;identifier&gt;).minimize({<br>  min: 0,<br>  buttonText: ["Show", "Hide"],<br>  fixHeader: false,<br>  initialView: "short"<br>});</pre>
<h3>Параметры функции <code>minimize()</code>:</h3>
<table>
  <tbody>
    <tr>
      <th>Свойство</th>
      <th width="100">Тип</th>
      <th width="110">Значение по умолчанию</th>
      <th>Описание</th>
    </tr>
    <tr>
      <td>min</td>
      <td>целое число</td>
      <td>0</td>
      <td>Количество видимых строк</td>
    </tr>
    <tr>
      <td>buttonText</td>
      <td>массив</td>
      <td>["Show", "Hide"]</td>
      <td>Текст внутри кнопки управления (кнопка генерируется автоматически)</td>
    </tr>
    <tr>
        <td>initialView</td>
        <td>строка</td>
        <td>"short"</td>
        <td>Начальный вид таблицы, <code>short</code> (свернута) или <code>full</code>(полностью показана)</td>
    </tr>
    <tr>
        <td>fixHeader</td>
        <td>логический</td>
        <td>false</td>
        <td>Фиксация элемента <code>&lt;thead&gt;</code> таблицы, если таковой есть: <code>true</code> - он будет видимым всегда, <code>false</code> - строки из него можно будет скрывать.</td>
    </tr>
  </tbody>
</table>
<strong>Важно.</strong> Не забудьте подключить в вашем коде css-файл <code>minTable-base.css</code>: в нем прописаны основные стили, которые помогут привести получившиеся таблицы к более аккуратному виду.
