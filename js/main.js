$(document).ready(function(){
	$('.galeria').bxSlider({
	  auto: true,
	  autoControls: true,
	  stopAutoOnClick: true,
	  pager: true,
	  slideWidth: 600,
	  pager: false
	});

	//Posts
	var posts = [
		{
			title: "Prueba de titulo 1",
			date: "Publicado el día "+ moment().date() + " de " + moment().format("MMMM") + " de " + moment().format("YYYY"),
			content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc facilisis erat orci, vitae molestie lorem fermentum sed. Integer efficitur enim ac urna volutpat fringilla. Sed volutpat luctus ex, ac fermentum nisl lacinia eu. Etiam justo eros, eleifend nec congue quis, malesuada vitae leo. Mauris tincidunt dapibus neque nec fermentum. Curabitur massa nisi, varius ut lorem nec, tincidunt ullamcorper nisl. Quisque sit amet sodales lectus. Aliquam erat volutpat. Curabitur tincidunt mauris euismod nunc interdum, in luctus tortor eleifend. In ac mi condimentum, blandit leo a, elementum tellus. Mauris ligula massa, condimentum sed lorem in, gravida pellentesque lorem."
		},
		{
			title: "Prueba de titulo 2",
			date: new Date(),
			content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc facilisis erat orci, vitae molestie lorem fermentum sed. Integer efficitur enim ac urna volutpat fringilla. Sed volutpat luctus ex, ac fermentum nisl lacinia eu. Etiam justo eros, eleifend nec congue quis, malesuada vitae leo. Mauris tincidunt dapibus neque nec fermentum. Curabitur massa nisi, varius ut lorem nec, tincidunt ullamcorper nisl. Quisque sit amet sodales lectus. Aliquam erat volutpat. Curabitur tincidunt mauris euismod nunc interdum, in luctus tortor eleifend. In ac mi condimentum, blandit leo a, elementum tellus. Mauris ligula massa, condimentum sed lorem in, gravida pellentesque lorem."
		},
		{
			title: "Prueba de titulo 3",
			date: new Date(),
			content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc facilisis erat orci, vitae molestie lorem fermentum sed. Integer efficitur enim ac urna volutpat fringilla. Sed volutpat luctus ex, ac fermentum nisl lacinia eu. Etiam justo eros, eleifend nec congue quis, malesuada vitae leo. Mauris tincidunt dapibus neque nec fermentum. Curabitur massa nisi, varius ut lorem nec, tincidunt ullamcorper nisl. Quisque sit amet sodales lectus. Aliquam erat volutpat. Curabitur tincidunt mauris euismod nunc interdum, in luctus tortor eleifend. In ac mi condimentum, blandit leo a, elementum tellus. Mauris ligula massa, condimentum sed lorem in, gravida pellentesque lorem."
		},
		{
			title: "Prueba de titulo 4",
			date: new Date(),
			content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc facilisis erat orci, vitae molestie lorem fermentum sed. Integer efficitur enim ac urna volutpat fringilla. Sed volutpat luctus ex, ac fermentum nisl lacinia eu. Etiam justo eros, eleifend nec congue quis, malesuada vitae leo. Mauris tincidunt dapibus neque nec fermentum. Curabitur massa nisi, varius ut lorem nec, tincidunt ullamcorper nisl. Quisque sit amet sodales lectus. Aliquam erat volutpat. Curabitur tincidunt mauris euismod nunc interdum, in luctus tortor eleifend. In ac mi condimentum, blandit leo a, elementum tellus. Mauris ligula massa, condimentum sed lorem in, gravida pellentesque lorem."
		},
		{
			title: "Prueba de titulo 5",
			date: new Date(),
			content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc facilisis erat orci, vitae molestie lorem fermentum sed. Integer efficitur enim ac urna volutpat fringilla. Sed volutpat luctus ex, ac fermentum nisl lacinia eu. Etiam justo eros, eleifend nec congue quis, malesuada vitae leo. Mauris tincidunt dapibus neque nec fermentum. Curabitur massa nisi, varius ut lorem nec, tincidunt ullamcorper nisl. Quisque sit amet sodales lectus. Aliquam erat volutpat. Curabitur tincidunt mauris euismod nunc interdum, in luctus tortor eleifend. In ac mi condimentum, blandit leo a, elementum tellus. Mauris ligula massa, condimentum sed lorem in, gravida pellentesque lorem."
		},
	];
	

	posts.forEach((item, index) => {
		var post = `<article class="post">
				<h2>${item.title}</h2>
				<span class="date">${item.date}</span>
				<p>
					${item.content}
				</p>
				<a href="#" class="button-more">Leer mas</a>
			</article>`;


			$("#posts").append(post);
	});


	// Selector de thema
	var theme = $("#theme");

	$("#to-green").click(function(){
		theme.attr("href", "css/green.css");
	});

	$("#to-red").click(function(){
		theme.attr("href", "css/red.css");
	});

	$("#to-blue").click(function(){
		theme.attr("href", "css/blue.css");
	});

	// Scroll arriba de la web
	$(".subir").click(function(e){
		e.preventDefault();

		$('html, body').animate({
			scrollTop: 0
		}, 500);

		return false;
	});

	// Login Falso
	$("#login form").submit(function(){
		var form_name = $("#form_name").val();

		localStorage.setItem("form_name", form_name);
	});

	var form_name = localStorage.getItem("form_name");

	if (form_name != null && form_name != "undefined"){
		var about_parrafo = $("#about p");

		about_parrafo.html("<strong>Bienvenido</strong> "+ form_name);
		about_parrafo.append("<a href='#' id='logout'>Cerrar Sesión</a>");
		$("#login").hide();

		$("#logout").click(function(){
			localStorage.clear();
			location.reload();
		});
	}
});