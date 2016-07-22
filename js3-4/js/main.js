'use strict'

function test(){



	var data = {
		title : 'Тест по программированию',
		button : 'Проверить мои результаты',
		question : [
			{
				title : '1. Вопрос №1',
				answers : [
					{
						title : 'Вариант ответа №1'
					},
					{
						title : 'Вариант ответа №2'
					},
					{
						title : 'Вариант ответа №3'
					}
				]
			},
			{
				title : '2. Вопрос №2',
				answers : [
					{
						title : 'Вариант ответа №1'
					},
					{
						title : 'Вариант ответа №2'
					},
					{
						title : 'Вариант ответа №3'
					}
				]
			},
			{
				title : '3. Вопрос №3',
				answers : [
					{
						title : 'Вариант ответа №1'
					},
					{
						title : 'Вариант ответа №2'
					},
					{
						title : 'Вариант ответа №3'
					}
				]

			}
		]
	};
	var container = document.createElement('div');
	var renderTitle = function(){
		var element = document.createElement('h3');
		element.innerHTML = data.title;
		element.classList.add('col-md-offset-5', 'col-md-4');
		container.appendChild(element);
	};

	var renderQuestion = function(){
		var questionLenght = data.question.length;
		var i, k, question, questionContainer, questionParent, questionTitle, 
		answer, answerContainer, answerTitle, answerLabel,answerCheckbox, answersLenght, answerId ;

		for (var i = 0; i < questionLenght; i+=1) {
			question = data.question[i];
			questionParent = document.createElement('div');
			questionParent.classList.add('row');
			questionContainer = document.createElement('div');
			questionContainer.classList.add('col-md-offset-3', 'col-md-3');
			questionTitle = document.createElement('h4');
			questionTitle.innerHTML = question.title;
			questionContainer.appendChild(questionTitle);
			answersLenght = question.answers.length;
			answerContainer = document.createElement('ul');
			for (var k = 0; k < answersLenght; k+=1) {
				answer = question.answers[k];
				answerId = 'answer_'+(i+1)+'_'+(k+1);
				
				answerTitle = document.createElement('li');
				answerCheckbox = document.createElement('input');
				answerCheckbox.id = answerId;
				answerCheckbox.setAttribute('type', 'checkbox');
				answerLabel = document.createElement('label');
				answerLabel.setAttribute('for', answerId);
				answerLabel.innerHTML = answer.title;
				answerTitle.appendChild(answerCheckbox);
				answerTitle.appendChild(answerLabel);
				answerContainer.appendChild(answerTitle);
			}
			questionContainer.appendChild(answerContainer);
			questionParent.appendChild(questionContainer);
			container.appendChild(questionParent);

		}
		
	};

	var renderButton = function(){
		var element = document.createElement('button');
		element.innerHTML = data.button;
		element.classList.add('col-md-offset-5', 'col-md-2', 'btn', 'btn-primary');
		container.appendChild(element);
	};

	this.render = function(id){
		renderTitle();
		renderQuestion();
		renderButton();
		document.body.appendChild(container);
	};

localStorage.setItem('dataTest', JSON.stringify(data));
var dataLoc = localStorage.getItem('dataTest');
console.log(dataLoc);

}
var test = new test();
test.render();
