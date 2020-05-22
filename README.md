# mocha-demos
**回顾断言**
```
// 相等或不相等
expect(4 + 5).to.be.equal(9);
expect(4 + 5).to.be.not.equal(10);
expect(foo).to.be.deep.equal({ bar: 'baz' });

// 布尔值为true
expect('everthing').to.be.ok;
expect(false).to.not.be.ok;

// typeof
expect('test').to.be.a('string');
expect({ foo: 'bar' }).to.be.an('object');
expect(foo).to.be.an.instanceof(Foo);

// include
expect([1,2,3]).to.include(2);
expect('foobar').to.contain('foo');
expect({ foo: 'bar', hello: 'universe' }).to.include.keys('foo');

// empty
expect([]).to.be.empty;
expect('').to.be.empty;
expect({}).to.be.empty;

// match
expect('foobar').to.match(/^foo/);
```
# demo01 基本用法

```
run npx mocha .\demo01\add.test.js
```

测试脚本里面应该包括一个或多个describe块，每个describe块应该包括一个或多个it块。

describe块称为"测试套件"（test suite），表示一组相关的测试。它是一个函数，第一个参数是测试套件的名称（"加法函数的测试"），第二个参数是一个实际执行的函数。

it块称为"测试用例"（test case），表示一个单独的测试，是测试的最小单位。它也是一个函数，第一个参数是测试用例的名称（"1 加 1 应该等于 2"），第二个参数是一个实际执行的函数。

# demo02 进阶用法 通配符 命令行参数 mochawesome

```
cd demo02 && npx mocha --recursive
```
会去执行test目录下的js文件，加上--recursive 表面递归

**其实还可以使用通配符, 如shell， node**

```
$ mocha spec/{my,awesome}.js
$ mocha test/unit/*.js
```
```
npx mocha --reporter mochawesome
测试结果报告就在mochaawesome-reports子目录生成
```
--reporter参数用来指定测试报告的格式，默认是spec格式
官方网站还提供了其他许多报告格式。

# demo03 配置mocha.opts 代替命令行参数

# demo04 测试ES6

```
cd demo04 && npx mocha --require @babel/register
```
# demo05 异步测试

```
npx mocha -t 5000 .\timeout.test.js

npx mocha -t 10000 .\async.test.js

npx mocha -t 10000 .\demo05\promise.test.js
```

# demo06 mocha hooks
# demo07 only skip
# demo08 浏览器测试
``` 
$ mocha init demo08
```
```
    <script src="mocha.js"></script>
    <script>mocha.setup('bdd');</script>
    <script src="http://chaijs.com/chai.js"></script>
    <script src="add.js"></script>
    <script src="tests.js"></script>
```
# demo09 生成规格文件
```
$ mocha --recursive -R markdown > spec.md
$ mocha --recursive -R doc > spec.html
```