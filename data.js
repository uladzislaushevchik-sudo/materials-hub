const SECTIONS=[
{id:'students',title:'Карточки учеников',color:'#38bdf8',items:[
{title:'Егор Соколовский',desc:'B1− → B2 · FCE path · IT',tags:['карточка','Егор'],cat:['students'],badge:{t:'Online',c:'green'},url:'https://egor-sokolovsky-card.netlify.app/'},
{title:'Сергей Давидовский',desc:'Словарь · расписание · упражнения',tags:['карточка','Сергей'],cat:['students'],badge:{t:'Online',c:'green'},url:'https://cdn.jsdelivr.net/gh/uladzislaushevchik-sudo/sergey-student-card@main/index.html'},
{title:'Сергей Авчинник',desc:'IT / programming English · A2+ → B2',tags:['карточка','Авчинник'],cat:['students'],badge:{t:'Online',c:'green'},url:'https://cdn.jsdelivr.net/gh/uladzislaushevchik-sudo/sergey-avchinnik-card@main/index.html'},
{title:'Виктория Бузук',desc:'Бизнес / логистика · B1',tags:['карточка','Виктория'],cat:['students'],badge:{t:'Online',c:'green'},url:'https://cdn.jsdelivr.net/gh/uladzislaushevchik-sudo/victoria-buzuk-card@main/index.html'}
]},
{id:'tenses',title:'Упражнения · Времена',color:'#818cf8',items:[
{title:'Simple Tenses',desc:'Present · Past · Future Simple',tags:['времена','Simple'],cat:['exercises'],badge:{t:'Online',c:'green'},url:'https://uladzislaushevchik-sudo.github.io/simple-tenses/'},
{title:'Continuous Tenses',desc:'Present · Past · Future Continuous',tags:['времена','Continuous'],cat:['exercises'],badge:{t:'Online',c:'green'},url:'https://cdn.jsdelivr.net/gh/uladzislaushevchik-sudo/continuous-tenses@main/index.html'},
{title:'Perfect Tenses',desc:'Present · Past · Future Perfect',tags:['времена','Perfect'],cat:['exercises'],badge:{t:'Online',c:'green'},url:'https://cdn.jsdelivr.net/gh/uladzislaushevchik-sudo/perfect-tenses@main/index.html'},
{title:'Present Simple',desc:'Утверждения, вопросы, отрицания, to be',tags:['Present Simple'],cat:['exercises'],badge:{t:'Online',c:'green'},url:'https://uladzislaushevchik-sudo.github.io/present-simple/'},
{title:'All Tenses Test',desc:'Большой тест по всем временам',tags:['тест','времена'],cat:['exercises','exams'],badge:{t:'Online',c:'green'},url:'https://uladzislaushevchik-sudo.github.io/all-tenses-test/'},
{title:'Gerund & Infinitive',desc:'stop / remember / try / regret…',tags:['герундий','инфинитив'],cat:['exercises'],badge:{t:'Локально',c:'muted'},path:'materials/grammar/Mikhail_Pogosyan_Gerund_Infinitive_Interactive.html'}
]},
{id:'prepositions',title:'Упражнения · Предлоги',color:'#a78bfa',items:[
{title:'Prepositions of Time',desc:'in / on / at',tags:['время'],cat:['exercises'],badge:{t:'Online',c:'green'},url:'https://htmlpreview.github.io/?https://raw.githubusercontent.com/uladzislaushevchik-sudo/prepositions-of-time/main/index.html'},
{title:'Prepositions of Place',desc:'in / on / at / under…',tags:['место'],cat:['exercises'],badge:{t:'Online',c:'green'},url:'https://htmlpreview.github.io/?https://raw.githubusercontent.com/uladzislaushevchik-sudo/prepositions-of-place/main/index.html'},
{title:'Prepositions + Transport',desc:'by bus, on the train, in a taxi…',tags:['транспорт'],cat:['exercises'],badge:{t:'Online',c:'green'},url:'https://cdn.jsdelivr.net/gh/uladzislaushevchik-sudo/prepositions-transport@main/index.html'},
{title:'Reason & Purpose',desc:'because of, due to, for, to, in order to',tags:['причина','цель'],cat:['exercises'],badge:{t:'Online',c:'green'},url:'https://cdn.jsdelivr.net/gh/uladzislaushevchik-sudo/prepositions-reason-purpose@main/index.html'},
{title:'Prepositions Exam',desc:'Экзамен · ~70 pts',tags:['экзамен'],cat:['exercises','exams'],badge:{t:'Online',c:'green'},url:'https://cdn.jsdelivr.net/gh/uladzislaushevchik-sudo/prepositions-exam@main/index.html'}
]},
{id:'grammar-other',title:'Упражнения · Артикли · Quantifiers · Level',color:'#34d399',items:[
{title:'Articles (a / an / the / zero)',desc:'Практика артиклей',tags:['артикли'],cat:['exercises'],badge:{t:'Online',c:'green'},url:'https://uladzislaushevchik-sudo.github.io/articles-practice/'},
{title:'Quantifiers',desc:'much, many, some, any, few, little…',tags:['quantifiers'],cat:['exercises'],badge:{t:'Локально',c:'muted'},path:'materials/grammar/Quantifiers_Interactive.html'},
{title:'English Level Test',desc:'CEFR placement test',tags:['уровень','CEFR','тест'],cat:['exercises','exams'],badge:{t:'Online',c:'green'},url:'https://cdn.jsdelivr.net/gh/uladzislaushevchik-sudo/english-level-test@main/index.html'}
]},
{id:'vocab',title:'Упражнения · Словарь',color:'#fbbf24',items:[
{title:'Collocations Practice',desc:'Устойчивые сочетания',tags:['collocations'],cat:['exercises'],badge:{t:'Локально',c:'muted'},path:'materials/vocabulary/Collocations_Interactive.html'},
{title:'Сергей Д. — Vocabulary',desc:'Словарь по темам',tags:['Сергей','словарь'],cat:['exercises'],badge:{t:'Локально',c:'muted'},path:'materials/vocabulary/Sergey_Davidovsky_Vocabulary_Interactive.html'},
{title:'Виктория — Vocabulary',desc:'Бизнес / логистика',tags:['Виктория','словарь'],cat:['exercises'],badge:{t:'Online',c:'green'},url:'https://cdn.jsdelivr.net/gh/uladzislaushevchik-sudo/victoria-vocabulary@main/index.html'}
]},
{id:'fce',title:'Упражнения · Cambridge FCE',color:'#fb7185',items:[
{title:'FCE Foundation',desc:'articles · there is · linkers · email',tags:['FCE','Егор'],cat:['exercises'],badge:{t:'Локально',c:'muted'},path:'materials/egor/Egor_FCE_Foundation_Interactive.html'},
{title:'FCE Articles',desc:'Артикли под FCE',tags:['FCE'],cat:['exercises'],badge:{t:'Локально',c:'muted'},path:'materials/egor/Egor_FCE_Articles.html'},
{title:'FCE Relative Clauses',desc:'Relative clauses',tags:['FCE'],cat:['exercises'],badge:{t:'Локально',c:'muted'},path:'materials/egor/Egor_FCE_Relative_Clauses.html'},
{title:'FCE Writing Rewrite',desc:'Переписывание писем',tags:['FCE','writing'],cat:['exercises'],badge:{t:'Локально',c:'muted'},path:'materials/egor/Egor_FCE_Writing_Rewrite.html'}
]},
{id:'other',title:'Упражнения · Другое',color:'#94a3b8',items:[
{title:'Вероника · Spain Survival',desc:'Разговорные ситуации · Испания',tags:['Вероника'],cat:['exercises'],badge:{t:'Локально',c:'muted'},path:'materials/veronika/Veronika_Spain_Survival_Interactive.html'},
{title:'Вероника · Shopping & Spa',desc:'Шоппинг и spa-лексика',tags:['Вероника'],cat:['exercises'],badge:{t:'Локально',c:'muted'},path:'materials/veronika/Veronika_Shopping_Spa_Interactive.html'},
{title:'Victoria · B1 Practice Exam',desc:'Практический экзамен B1',tags:['Виктория','B1','экзамен'],cat:['exercises','exams'],badge:{t:'Локально',c:'muted'},path:'materials/victoria/Victoria_Buzuk_Cambridge_B1_Practice_Exam.html'},
{title:'Результаты экзаменов (Sheet)',desc:'Prepositions + Articles results',tags:['результаты'],cat:['exams'],badge:{t:'Sheet',c:'amber'},url:'https://docs.google.com/spreadsheets/d/1bzhTL58e2V5Cjaz-F5lH_5IPkXpFXLZsqTnAEqCiPvM'}
]}
];
