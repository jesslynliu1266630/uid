window.onload = function(){
let search = document.querySelector('#search')
					 let maskSearch = document.querySelector('#mask-search')
					 let searchBtn = document.querySelector('#searchBtn')
					 let look = document.querySelector('#look')
					 let imgMask = document.querySelector('#img-mask')
					 let close = document.querySelector('#close')
					 let add = document.querySelector('#addcard')
					 
					 search.addEventListener('focus',function(){
						 maskSearch.style.display = 'block'
					 })
					 
					searchBtn.addEventListener('click',function(){
					   location.href = 'searchresults.html'
					})
					
					look.addEventListener('click',function(){
						imgMask.style.display = 'flex'
					})
					
					close.addEventListener('click',function(){
						imgMask.style.display = 'none'
					})
					
					add.addEventListener('click',function(){
						location.href = "shoppingcart.html"
					})
				}
