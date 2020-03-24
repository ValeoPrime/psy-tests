
const QuestionDB = {
    school: {
        questionnaireTitle: 'Школьная программа',
        questions: [
            {
                question: 'Сколько океанов на нашей планете?',
                rightAnswerId: 3,
                id: 1,
                answers: [
                  {text: 'Два', id: 1},
                  {text: 'Пять', id: 2},
                  {text: 'Семь', id: 3},
                ]
            },
            {
                question: 'Единица измерения силы тока это?',
                rightAnswerId: 1,
                id: 2,
                answers: [
                  {text: 'Ампер', id: 1},
                  {text: 'Ватт', id: 2},
                  {text: 'Вольт', id: 3},
                  {text: 'Ом', id: 4}
                ]
            },
            {
                question: 'Самая длинная река в мире это?',
                rightAnswerId: 2,
                id: 2,
                answers: [
                  {text: 'Нил', id: 1},
                  {text: 'Амазонка', id: 2},
                  {text: 'Яндзы', id: 3},
                  {text: 'Я хз', id: 4}
                ]
            },
            {
                question: 'Листья растений зеленые из-за?',
                rightAnswerId: 1,
                id: 2,
                answers: [
                  {text: 'Хлорофила', id: 1},
                  {text: 'Хропласта', id: 2},
                  {text: 'Ультрафиолета', id: 3},
                  {text: 'Не стабильного психического состояния', id: 4}
                ]
            },
            {
                question: 'Сколько хромосом в геноме человека?',
                rightAnswerId: 1,
                id: 3,
                answers: [
                  {text: '42', id: 1},
                  {text: '24', id: 2},
                  {text: '46', id: 3},
                  {text: 'у некоторых 18', id: 4}
                ]
            }
        ] 
        },
    other: {
        questionnaireTitle: 'Вопросы на общий кругозор',
        questions: [
            {
                question: 'Сколько пальцев на руке у опытного фрезировщика?',
                rightAnswerId: 3,
                id: 2,
                answers: [
                    {text: 'Два', id: 1},
                    {text: 'Пять', id: 2},
                    {text: 'Зависит от стажа работы', id: 3},
                    {text: 'Пвтрте впрс', id: 4}
                ]
            },
            {
                question: 'Кто открыл Америку?',
                rightAnswerId: 4,
                id: 2,
                answers: [
                    {text: 'Амундсен', id: 1},
                    {text: 'Терешкова', id: 2},
                    {text: 'Чингачгук "Большой змей"', id: 3},
                    {text: 'Колумбино', id: 4}
                ]
            },
            {
                question: 'Сколько планет в солнечной системе?',
                rightAnswerId: 3,
                id: 2,
                answers: [
                    {text: '4', id: 1},
                    {text: '6', id: 2},
                    {text: '9', id: 3},
                    {text: '11, но это не точно', id: 4}
                ]
            },
            {
                question: 'Как называется внутренний орган человека отвечающий за выработку ферментов для переваривания пищи?',
                rightAnswerId: 2,
                id: 2,
                answers: [
                    {text: 'Сердце', id: 1},
                    {text: 'Желудок', id: 2},
                    {text: 'Внутреннее ухо', id: 3},
                    {text: 'Подколенная связка', id: 4}
                ]
            },
            {
                question: 'В каком месяце произошла Октябрьская революция?',
                rightAnswerId: 1,
                id: 2,
                answers: [
                    {text: 'Май', id: 1},
                    {text: 'Сентябрь', id: 2},
                    {text: 'Было лето', id: 3},
                    {text: 'Октябрь', id: 4}
                ]
            }
        ] 
        }
    }

    export default QuestionDB
    
   
