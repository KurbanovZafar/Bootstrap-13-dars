let payArray = [];
$(document).ready(function(){
    let payId =  0;
    let xodimId = "";
    $("#addPay").click(function(){
        let payUser = $("#payUser").val();
        let payUserId = $("#payUserId").val();
        let payOrder = $("#payOrder").val();
        let paySum = $("#paySum").val();
        let payType = $("#payType").val();
        let payTarget = $("#payTarget").val();
        let payDate = $("#payDate").val();
        payId++;
        payArray.push(
            {
               id: payId,
               userId: xodimId,
               payUser: payUser,
               payUserId: payUserId,
               payOrder: payOrder,
               paySum: paySum,
               payType: payType,
               payTarget: payTarget,
               payDate: payDate
            }
        );
        let list = "";
        payArray.forEach(function(item){
            list += '<tr>' +
                        '<td>' +item.id+ '</td>' +
                        '<td>' +item.payUser+ '</td>' +
                        '<td>' +item.paySum+ '</td>' +
                        '<td>' +item.payOrder+ '</td>' +
                        '<td><span class="badge badge-success">' +item.payTarget+ '</span></td>'+
                        '<td>' +item.payDate+ '</td>' +
                        '<td>' +
                            '<button type="button" class="btn btn-primary">Edit</button>' +
                            '<button type="button" class="btn btn-danger">Delete</button>' +
                        '</td>' +
                    '</tr>'
        });
        $("#tbody").html(list);
    });
});
