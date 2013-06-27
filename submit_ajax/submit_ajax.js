// ajaxに引き渡すdataの連想配列を生成する
var aa={};
// form > name属性value属性があるモノ全て
var selector_st='form [name!=""] :input[type!="button"]';
var l=$(selector_st).length;

console.log(l);  //Hitした件数

for(var i=0;i<l;i++){
    //i番目の属性nameをkeyに、値をvalueにセットした連想配列を生成
    aa[$(selector_st+':eq('+i+')').attr("name")]=$(selector_st+':eq('+i+')').val();
}
console.log(aa);


$.ajax({
    url:'../model/sample.php'
    ,dataType:'json'
    ,type:'post'
    ,scriptCharaset:'utf-8'
    ,data:aa
    ,success:function(data){
        alert('success');
    }
    ,error:function(){
        alert('error');
    }
});
