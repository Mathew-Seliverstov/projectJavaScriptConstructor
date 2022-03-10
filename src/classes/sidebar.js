import {TextBlock, TitleBlock, ImageBlock, TextColumnsBlock, VideoBlock} from './blocks'


export class Sidebar {
	constructor(selector, update, Delete) {
		this.$el = document.querySelector(selector)
		this.update = update

		this.init()
	}

	init() {
		this.$el.addEventListener('submit', this.addBlock.bind(this))
		this.$el.innerHTML = this.template
	}

	get template () {
		return [
			block('Текст'),
			block('Заголовок'),
			block2('Картинки'),
			block3('Колонки')
		].join('')
	}

	addBlock(event) {
		event.preventDefault()
		
		const type = event.target.name
		const value = event.target.value.value
		const styles = event.target.styles.value

		const Constructor = type === 'Колонки' ? VideoBlock : VideoBlock
		const ConstructorImg = type === 'Картинки' ? ImageBlock : ImageBlock
		const ConstructorTitle = type === 'Заголовок' ? TitleBlock : TitleBlock
		const ConstructorText = type === 'Текст' ? TextBlock : TextBlock

		if (type === 'Картинки') {
			const newImgBlock = new ConstructorImg(value, {styles})
			this.update(newImgBlock)
		}
		
		if (type === 'Заголовок') {
			const newTitleBlock = new ConstructorTitle(value, {styles})
			this.update(newTitleBlock)
		}
		
		if (type === 'Текст') {
			const newTextBlock = new ConstructorText(value, {styles})
			this.update(newTextBlock)
		} else {
			const newVideoBlock = new Constructor(value, {styles})
			this.update(newVideoBlock)

		}




		event.target.value.value = ''
		event.target.styles.value = ''
	}
}



function block2(type) {
	return `
	<form name="${type}">
	<h5>${type}</h5>
	<div class="form-group">
		<input class="form-control form-control-sm" name="value" placeholder="URL адрес картинки">
	</div>
	<div class="form-group">
		<input class="form-control form-control-sm" name="styles" placeholder="Стили">
	</div>
	<button type="submit" class=" btn-primary  btn-sm">Добавить</button>
	
</form>
	`
}

function block(type) {
	return `
	<form name="${type}">
		<h5>${type}</h5>
		<div class="form-group">
			<input class="form-control form-control-sm" name="value" placeholder="Текст">
		</div>
		<div class="form-group">
			<input class="form-control form-control-sm" name="styles" placeholder="Стили">
		</div>
		<button type="submit" class=" btn-primary  btn-sm">Добавить</button>
	</form>
	<hr />
	`
}

function block3(type) {
	return `
	<form name="${type}">
		<h5>${type}</h5>
		<div class="form-group">
			<input class="form-control form-control-sm" name="value" placeholder="url video">
		</div>
		<div class="form-group">
			<input class="form-control form-control-sm" name="styles" placeholder="Стили">
		</div>
		<button type="submit" class=" btn-primary  btn-sm">Добавить</button>
	</form>
	<hr />
	`
}