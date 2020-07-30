window.onload = (event) => {
    var node = document.getElementById('input');
    // var doing_list_num = document.getElementById('doing_num');
    node.addEventListener('keyup', listenKey);

    var para = document.createElement('li');
    var node = document.createElement('input');
    var p = document.createElement('p');

    var flag = false;
    function listenKey(event) {
        if (event.keyCode == 13 && event.target.value) {
            //增加li属性
            // node.setAttribute('draggable', 'true');
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

            var doing = document.getElementById('doing');
            var num = parseInt(doing.innerHTML);
            doing.innerHTML = ++num;

            del.onclick = () => {
                doing.removeChild(para);
            };
            //清空输入框
            // insertNode(add_input,doing_list_num,event);
            event.target.value = '';
        }
    }


  /*   function insertNode(list_id,list_num,event){
        var li_element = document.createElement('li');
        var input_element = document.createElement(list_id);
        var p_element = document.createElement('p');
        var input_text_node = document.createTextNode(event.target.value);
        var a_element = document.createElement('a');
        var line_text_node = document.createTextNode('-');


        input_element.setAttribute('type', 'checkbox');
        li_element.appendChild(input_element);
        li_element.appendChild(p_element);
        p_element.appendChild(input_text_node);
        li_element.appendChild(a_element);
        a_element.appendChild(line_text_node);

        var ol_element = document.getElementById('todo');
        ol_element.appendChild(li_element);
        //doing_num
        var doing_num = document.getElementById(list_num);
        var num = parseInt(doing_num.innerHTML);
        doing_num.innerHTML = ++num;
    }

 */


    var done_li = document.createElement('li');
    var node_input = document.createElement('input');
    var done_num = document.getElementById('done');
    var num2 = parseInt(done_num.innerHTML);
    //给输入框添加事件
    var node = document.createElement('input');
    node.onchange = (e) => {
        flag = !flag;
        var doing = document.getElementById('doing');
        var num = parseInt(doing.innerHTML);
        doing.innerHTML = --num;
        para.setAttribute('hidden', 'true');

        var done_node = document.getElementById('done_ul');

        var del2 = document.createElement('a');
        done_node.appendChild(done_li);
        node_input.setAttribute('type', 'checkbox');
        done_li.appendChild(node_input);
        var p2 = document.createElement('p');
        done_li.appendChild(p2);
        var text = document.createTextNode(e.target.value);
        p2.appendChild(text);
        done_li.appendChild(del2);
        var line2 = document.createTextNode('-');
        del2.appendChild(line2);
        node_input.setAttribute('checked', 'checked');
        done_num.innerHTML = ++num2;
    };
    node_input.onchange = () => {
        done_li.setAttribute('hidden', 'true');
        done_num.innerHTML = --num2;
        listenKey(event);
    };
};

/*     //clear
    function clear() {
        input.removeEventListener('keyup', listenKey);
    }
 */
