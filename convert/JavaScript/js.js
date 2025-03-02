

const inputkey = document.getElementById("input1").addEventListener("keypress", function(enterpress)
{

    if(enterpress.key === "Enter")
    {
        
        
        //после нажатие enter  получаем данные того что ввели в первое окошко, и конвертируем в число
        var inputobj = document.getElementsByClassName("form__input1")[0].value;
        var parsinput = parseInt(inputobj);
        //затем  создается переменная в которой будет храниться доллар и тоже конвертируется
        var dollar = null;
        var parsdollar = parseInt(dollar);

        // затем в операторе if  делаем условие если данное вырадение равно числу то ок, в ином случае ошибка
       if(parsinput = parseInt(inputobj))
        {

            //в переменную где должно храниться результат записываем его, затем этот результат выводим во втором окошке
            var parsdollar =  parsinput / 86.82;
            var newobj = document.getElementsByClassName("form__input2")[0].value = parsdollar + "$";

        }
       else
        {

            var error = "Ошибка";
            var newobj = document.getElementsByClassName("form__input2")[0].value = error;

        }
        
           
        
    }



});

const inputkey1 = document.getElementById("input3").addEventListener("keypress", function(enterpress1)
{

    if(enterpress1.key === "Enter")
    {

        var inputobj1 = document.getElementsByClassName("form__input3")[0].value;
        var parsinput1 = parseInt(inputobj1);
        var euro1 = null;
        var parseuro1 = parseInt(euro1);

        if(parsinput1 = parseInt(inputobj1))
        {

            var parseuro1 =  parsinput1 / 91.04;
            var newobj1 = document.getElementsByClassName("form__input4")[0].value = parseuro1 + "€";

        }
        else
        {

            var error1 = "Ошибка";
            var newobj1 = document.getElementsByClassName("form__input4")[0].value = error1;

        }

    }

});

const inputkey2 = document.getElementById("input5").addEventListener("keypress", function(enterpress2)
{

    if(enterpress2.key === "Enter")
    {

        var inputobj2 = document.getElementsByClassName("form__input5")[0].value;
        var parsinput2 = parseInt(inputobj2);
        var cent2 = null;
        var parscentr2 = parseInt(cent2);

        if(parsinput2 = parseInt(inputobj2))
        {
    
            var parscent2 =  parsinput2 / 34.80;
            var newobj2 = document.getElementsByClassName("form__input6")[0].value = parscent2 + "Cn";
    
        }
        else
        {
    
            var error2 = "Ошибка";
            var newobj2 = document.getElementsByClassName("form__input6")[0].value = error2;
    
        }

    }

});









































































































































































































































































