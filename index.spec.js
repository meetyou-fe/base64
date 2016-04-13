var base64 = require('./index.js');
var expect = require('chai').expect;

describe('base64 test',function(){

  it('whatever => d2hhdGV2ZXI= ', function() {
    expect(base64.encode('whatever')).to.be.equal('d2hhdGV2ZXI=');
  });

  it('d2hhdGV2ZXI= => whatever  ', function() {
    expect(base64.decode('d2hhdGV2ZXI=')).to.be.equal('whatever');
  });

  it('http://www.baidu.com?a=b => aHR0cDovL3d3dy5iYWlkdS5jb20/YT1i ', function() {
    expect(base64.encode('http://www.baidu.com?a=b')).to.be.equal('aHR0cDovL3d3dy5iYWlkdS5jb20/YT1i');
  });

  it('aHR0cDovL3d3dy5iYWlkdS5jb20/YT1i => http://www.baidu.com?a=b', function() {
    expect(base64.decode('aHR0cDovL3d3dy5iYWlkdS5jb20/YT1i')).to.be.equal('http://www.baidu.com?a=b');
  });

  it('将代码以BASE64方式加密、解密 => 5bCG5Luj56CB5LulQkFTRTY05pa55byP5Yqg5a+G44CB6Kej5a+G ', function() {
    expect(base64.encode('将代码以BASE64方式加密、解密')).to.be.equal('5bCG5Luj56CB5LulQkFTRTY05pa55byP5Yqg5a+G44CB6Kej5a+G');
  });

  it('5bCG5Luj56CB5LulQkFTRTY05pa55byP5Yqg5a+G44CB6Kej5a+G => 将代码以BASE64方式加密、解密  ', function() {
    expect(base64.decode('5bCG5Luj56CB5LulQkFTRTY05pa55byP5Yqg5a+G44CB6Kej5a+G')).to.be.equal('将代码以BASE64方式加密、解密');
  });

  it('aHR0cDovL3d3dy5iYWlkdS5jb20_YT1i => http://www.baidu.com?a=b', function() {
    expect(base64.urlsafe_b64decode('aHR0cDovL3d3dy5iYWlkdS5jb20_YT1i')).to.be.equal('http://www.baidu.com?a=b');
  });

  it('http://www.baidu.com?a=b => aHR0cDovL3d3dy5iYWlkdS5jb20_YT1i ', function() {
    expect(base64.urlsafe_b64encode('http://www.baidu.com?a=b')).to.be.equal('aHR0cDovL3d3dy5iYWlkdS5jb20_YT1i');
  });

  it('将代码以BASE64方式加密、解密 safe', function() {
    expect(base64.urlsafe_b64decode(base64.urlsafe_b64encode('将代码以BASE64方式加密、解密'))).to.be.equal('将代码以BASE64方式加密、解密');
  });
});
