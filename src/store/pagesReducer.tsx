type Page = {
    id: number;
    title: string;
    link: string;
    content: string;
}

type PagesState = {
    pages: Page[];
}


const initialState: PagesState = {
    pages: [
        { id: 1, title: 'Университет', link: '/university', content: 'Содержимое страницы Университет' },
        { id: 2, title: 'Образование', link: '/education', content: 'Содержимое страницы Образование' },
        { id: 3, title: 'Наука и инновации', link: '/science-and-innovation', content: 'Содержимое страницы Наука и инновации' },
        { id: 4, title: 'Учёный совет', link: '/academic-council', content: 'Содержимое страницы Учёный совет' },
        { id: 5, title: 'Молодежная политика', link: '/youth-policy', content: 'Содержимое страницы Молодежная политика' },
        { id: 6, title: 'Международная деятельность', link: '/international-activity', content: 'Содержимое страницы Международная деятельность' },
        { id: 7, title: 'Медиа', link: '/media', content: 'Содержимое страницы Медиа' },
        { id: 8, title: 'Приоритет 2030', link: '/priority-2030', content: 'Содержимое страницы Приоритет 2030' },
        { id: 9, title: 'Цифровая кафедра', link: '/digital-department', content: 'Содержимое страницы Цифровая кафедра' },
        { id: 10, title: 'ПИШ Союзного государства', link: '/union-state', content: 'Содержимое страницы ПИШ Союзного государства' },
        { id: 11, title: 'Консорциум "ВМЕСТЕ"', link: '/consortium', content: 'Содержимое страницы Консорциум "ВМЕСТЕ"' },
        { id: 12, title: 'Координационный центр', link: '/coordination-center', content: 'Содержимое страницы Координационный центр' },
        { id: 13, title: 'Сайт для иностранных студентов', link: '/international-students', content: 'Содержимое страницы Сайт для иностранных студентов' },
        { id: 14, title: 'Открытые данные', link: '/open-data', content: 'Содержимое страницы Открытые данные' },
        { id: 15, title: 'Экзамен и государственное тестирование по РКИ', link: '/exam-and-testing', content: 'Содержимое страницы Экзамен и государственное тестирование по РКИ' }
    ],
};


type SetPageContentAction = {
    type: 'SET_PAGE_CONTENT';
    payload: {
        id: number;
        content: string;
    };
};

type ActionsType = SetPageContentAction;

export const PagesReducer = (state = initialState, action: ActionsType): PagesState => {
    switch (action.type) {
        case 'SET_PAGE_CONTENT':
            return {
                ...state,
                pages: state.pages.map(page =>
                    page.id === action.payload.id ? { ...page, content: action.payload.content } : page
                )
            };
        default:
            return state;
    }
};

export const setPageContent = (id: number, content: string): SetPageContentAction => ({
    type: 'SET_PAGE_CONTENT',
    payload: { id, content }
});

// export const selectPages = (state: AppRootStateType) => state.pages.pages;
