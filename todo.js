window.onload = () => {
    var input = document.getElementById('input');
    input.addEventListener('keyup',function (event) {
        var node = document.createElement('input');
        var para = document.createElement('li');
        var p = document.createElement('p');
        // console.log(event);
        if (event.keyCode == 13 && event.target.value) {
            /*  //增加li属性
            node.setAttribute('draggable', 'true'); */
            //增加复选框
            node.setAttribute('type', 'checkbox');
            para.appendChild(node);
            //增加p元素以及文本框
            para.appendChild(p);
            var text = document.createTextNode(event.target.value);
            p.appendChild(text);
            //添加删除按钮
            var del = document.createElement('a');
            var line = document.createTextNode('-');
            para.appendChild(del);
            del.appendChild(line);
            //将li添加到ol下
            var doing = document.getElementById('todo');
            doing.appendChild(para);
            //增加列表数

            var doing_num = document.getElementById('doing');
            var num = parseInt(doing_num.innerHTML);
            doing_num.innerHTML = ++num;

            // del.onclick = () => {
            //     doing.removeChild(para);
            // };
            //清空输入框
            event.target.value = '';
        }


        node.onchange = () => {

            if(para.parentNode == done_ul ){
                doing.appendChild(para);
            }else{
                insert(para);
            }
        }
    });

   
    function insert(para){
        var done_node = document.getElementById('done_ul');
        done_node.appendChild(para);
    }

  











     /* var done_li = document.createElement('li');
    var node_input = document.createElement('input');
    var done_num = document.getElementById('done');
    var num2 = parseInt(done_num.innerHTML);
    //给输入框添加事件
    node.onchange = (e) => {
        console.log(node.value);
        var doing = document.getElementById('doing');
        var num = parseInt(doing.innerHTML);
        doing.innerHTML = --num;
        // para.setAttribute('hidden','true');
        
        var done_node = document.getElementById('done_ul');
        
        var del2 = document.createElement('a');
        done_node.appendChild(done_li);
        node_input.setAttribute('type', 'checkbox');
        done_li.appendChild(done_node);
        var p2 = document.createElement('p');
        done_li.appendChild(p2);

        var text = document.createTextNode(e.target.value);
        p2.appendChild(text);
        done_li.appendChild(del2);
        var line2 = document.createTextNode('-');
        del2.appendChild(line2);
        // node_input.setAttribute('checked','checked');
       
        done_num.innerHTML = ++num2;
        
    };
    node_input.onchange = () => {
        // done_li.setAttribute('hidden','true');
        done_num.innerHTML = --num2;
        // listenKey();
    } */

};

/*     //clear
    function clear() {
        input.removeEventListener('keyup', listenKey);
    }
 */
