import hello_word from '../source/hello.js'
import world_word from '../source/world.js'
document.querySelector('#root').innerHTML = hello_word + ', ' + world_word;

// 입구가 되는 파일, 엔트리 파일

// npx webpack --entry ./source/index.js --output ./public/index_bundle.js
// 웹팩에게 엔트리 파일이 무엇이고 번들링의 결과 값을 어디에 저장할 것인가
