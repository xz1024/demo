function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

function preOrder(root) {
    var arr = [], res = [];
    arr.push(root);
    while (arr.length != 0) {
        var temp = arr.pop();  //弹出最后一个；
        res.push(temp.val);
        //将当前节点的左右子树存入
        if (temp.right) {
            arr.push(temp.right);
        }
        if (temp.left) {
            arr.push(temp.left)
        }

    }
    return res;
}
//中序排序，两层遍历
function midOrder(root) {
    var res = [], arr = [];
    while (root !== null || arr.length) {
        while (root != null) {
            arr.push(root);
            root = root.left;
        }
        var temp = arr.pop();
        res.push(temp.val);
        root = temp.right;
    }
}

//后序遍历
function lastOrder(root) {
    var arr = [], res = [];
    arr.push(root);
    while (arr.length != 0) {
        var temp = arr.pop();
        res.push(temp.val);
        if (temp.left) {
            arr.push(temp.left)
        }
        if (temp.right) {
            arr.push(temp.right)
        }
    }
    return res.reverse();
}
//后序非递归 左右根
var postorder = function (root) {
    if (!root)  //判断树是否为空
        return [];
    var result = [], stack = []; //result储存结果，stack存放遍历过的根，左节点，以便回溯访问右节点
    while (root) {
        result.unshift(root.val);  //从result数组头部插入根节点-右节点-左节点
        if (root.left)
            stack.push(root.left)
        if (root.right)
            stack.push(root.right)
        root = stack.pop();  //先弹出右节点，再弹出左节点
    }
    return result;
}
//层次遍历
function levelOrder(root) {
    var stack = [root];
    var level = [];
    var res = [];
    var size = stack.length;
    while (stack.length > 0) {
        while (size-- > 0) {
            var temp = stack.shift();
            level.push(temp.val);
            temp.left && stack.push(temp.left);
            temp.right && stack.push(temp.right);
        }
        res.push(level);
        level = [];
        size = stack.length;
    }
    return res;
}
