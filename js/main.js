
   $( document ).ready(function() {
   	$('.next').on('click', function()
   	{

   		var currentProd = $('.active');
   		var nextProd = currentProd.next();


   		if (nextProd.length)
   		{
   			

   			currentProd.removeClass('active');
   			nextProd.addClass('active');

   		}
   		else 
   		{
   			/*
   			$('.next').hide();
   			$('.prev').show();
   			*/
   		}



   	});

   	$('.prev').on('click', function()
   	{
   	

   		var currentProd = $('.active');
   		var prevProd = currentProd.prev();

   		if (prevProd.length)

   		{
   			
   			currentProd.removeClass('active');
   			prevProd.addClass('active');

   		}

   		/*else
   		{
   			$('.prev').hide();
   			$('.next').show();

   		}*/

   	});
    
     });
   		
    		
