function showMessage(){
      const textbox = document.getElementById("input-message");
      const inputValue = textbox.value;
      const output = "入力された内容は「" + inputValue + "」です。";
      //出力用のp要素にメッセージを表示
      document.getElementById("output-message").innerHTML = output;
}

var script = document.createElement( 'script' );


const filename = document.getElementById("url")
script.type = 'text/javascript';
script.src = filename;

var firstScript = document.getElementsByTagName( 'script' )[ 0 ];
firstScript.parentNode.insertBefore( script, firstScript );
