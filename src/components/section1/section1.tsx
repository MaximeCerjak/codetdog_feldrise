import {component$} from '@builder.io/qwik';
import Button from '../button';

export default component$(() => {
	return (
		<section class="w-full flex flex-col md:flex-row-reverse">
			<div class="w-full flex flex-col gap-12 px-12 py-16 md:px-32 md:py-64">
				<h1 class="text-2xl md:text-5xl font-extrabold">Educateur<br/>comportementaliste<br/>canin</h1>

				<div class="w-full flex flex-col">
					<h2 class="text-xl md:text-3xl font-extralight">Etienne Codet</h2>
					<p class="font-extralight">07 83 65 91 80</p>
				</div>

				<Button>Rendez-vous en ligne</Button>
			</div>
			<div class="w-full bg-header bg-cover bg-center h-32 md:h-full" />
		</section>
	);
});