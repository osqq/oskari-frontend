Oskari.registerLocalization(
{
    "lang": "ru",
    "key": "StatsGrid",
    "value": {
        "tile": {
            "title": "Тематические карты",
            "search": "Поиск данных",
            "table": "Таблица",
            "diagram": "Гистограмма"
        },
        "flyout": {
            "title": "Тематические карты"
        },
        "dataProviderInfoTitle": "Индикаторы",
        "layertools": {
            "table_icon": {
                "tooltip": "Переход к тематическим картам",
                "title": "Тематические карты"
            },
            "diagram_icon": {
                "tooltip": "Показать данные на диаграмме",
                "title": "Диаграмма"
            },
            "statistics": {
                "tooltip": "Переход к тематическим картам",
                "title": "Статистика"
            }
        },
        "panels": {
            "newSearch": {
                "title": "ПОИСК ДАННЫХ",
                "seriesTitle": "Временные ряды",
                "datasourceTitle": "Источник данных",
                "indicatorTitle": "Индикатор",
                "regionsetTitle": "Установки региона",
                "seriesLabel": "Получить данные в виде временных рядов ",
                "selectDatasourcePlaceholder": "Выбрать источник данных",
                "selectIndicatorPlaceholder": "Выбрать данные",
                "selectRegionsetPlaceholder": "Выбрать установки региона",
                "noResults": "Результаты соответствия не найдены",
                "refineSearchLabel": "Укажите содержание исследуемых данных",
                "refineSearchTooltip1": "Вы получите больше вариантов после выбора поставщика данных и данных.",
                "refineSearchTooltip2": "",
                "addButtonTitle": "Получить содержание данных",
                "clearButtonTitle": "Очистить",
                "defaultPlaceholder": "Выбрать значение",
                "selectionValues": {
                    "sex": {
                        "placeholder": "Выбрать пол",
                        "male": "Мужской",
                        "female": "Женский",
                        "total": "Итого"
                    },
                    "year": {
                        "placeholder": "Выбрать год"
                    },
                    "regionset": {
                        "placeholder": "Выбрать ареал обитания"
                    }
                },
                "noRegionset": "Область не выбрана"
            },
            "extraFeatures": {
                "title": "Дополнительные элементы",
                "hideMapLayers": "Скрыть другие слои карты",
                "openTableCheckbox": "Открыть таблицу",
                "openDiagramCheckbox": "Открыть гистограмму"
            }
        },
        "statsgrid": {
            "title": "ПОИСК ДАННЫХ",
            "noResults": "Данные не выбраны",
            "noValues": "Нет значений для выбранных данных",
            "areaSelection": {
                "title": "АРЕАЛ ОБИТАНИЯ",
                "info": "Пересмотреть ареал обитания для данных из выпадающего списка"
            },
            "source": "Данные",
            "orderBy": "Сортировать",
            "orderByAscending": "Сортировать по возрастанию",
            "orderByDescending": "Сортировать по убыванию",
            "removeSource": "Удалить данные"
        },
        "legend": {
            "title": "Классификация",
            "noActive": "Данные не были выбраны, выберите данные для просмотра классификации карт.",
            "noEnough": "Данные слишком малы для классификации, попробуйте другие данные или измените ограничения.",
            "noData": "Данные недоступны для выбранного момента времени.",
            "cannotCreateLegend": "Условные обозначения не могут быть созданы выбранными значениями, попробуйте разные значения."
        },
        "series": {
            "speed": {
                "label": "Скорость анимации",
                "fast": "Быстро",
                "normal": "Нормально",
                "slow": "Медленно"
            }
        },
        "diagram": {
            "title": "Диаграмма"
        },
        "parameters": {
            "sex": "Пол",
            "year": "Год",
            "regionset": "Облаcть",
            "from": "от",
            "to": "до"
        },
        "datatable": "Таблица",
        "published": {
            "showMap": "Показать карту",
            "showTable": "Показать таблицу"
        },
        "classify": {
            "classify": "Классификация",
            "classifymethod": "Метод классификации",
            "classes": "Классовое деление",
            "methods": {
                "jenks": "Естественные интервалы",
                "quantile": "Квантили",
                "equal": "Равные интервалы"
            },
            "manual": "Ручная настройка интервальной классификации",
            "manualPlaceholder": "Разделить значения запятыми.",
            "manualRangeError": "Разрывы классов являются ошибочными. Разрывы классов должны находиться между {min} - {max}. Разделяйте значения запятыми. Используйте десятичную точку в качестве разделителя. Исправьте разрывы классов и повторите попытку.",
            "nanError": "Данное значение не является числом. Исправьте значение и повторите попытку. Используйте десятичную точку в качестве разделителя.",
            "infoTitle": "Ручная настройка интервальной классификации",
            "info": "Сделайте разрывы класса как числа, разделенные запятой. Используйте десятичную точку в качестве разделителя. Например, путем ввода \"0, 10.5, 24, 30.2, 57, 73.1\" вы получаете пять классов, значения которых находятся между \"0-10,5\", \"10,5-24\", \"24-30,2\", \"30,2-57\" и \"57-73,1\". Значения индикаторов, которые меньше самого низкого класса (в предыдущем примере 0) или больше самого высокого класса (73,1), на карте не отображаются. Разрывы классов должны находиться между наименьшим и наибольшим значением индикатора.",
            "mode": "Разрывы классов",
            "modes": {
                "distinct": "Непрерывный",
                "discontinuous": "Прерывистый"
            },
            "editClassifyTitle": "Изменить классификацию",
            "classifyFieldsTitle": "Значения классификации",
            "map": {
                "mapStyle": "Стиль карты",
                "choropleth": "Картограмма",
                "points": "Символ точки на карте",
                "pointSize": "Размер точки",
                "min": "Минимум",
                "max": "Максимум",
                "color": "Цвет",
                "transparency": "Прозрачность",
                "showValues": "Показать значения",
                'fractionDigits': 'Количество десятичных знаков'
            }
        },
        "colorset": {
            "button": "Цвета",
            "flipButton": "Флип цвета",
            "themeselection": "Выбрать цвет для классов",
            "setselection": "Распределение",
            "seq": "Количественный",
            "qual": "Качественный",
            "div": "Различный",
            "info2": "Выберите цвета, щелкнув цветовую схему.",
            "cancel": "Отменить"
        },
        "errors": {
            "title": "Ошибка",
            "indicatorListError": "Произошла ошибка при поиске поставщика данных.",
            "indicatorListIsEmpty": "Список данных поставщика данных пуст.",
            "indicatorMetadataError": "Произошла ошибка при поиске выборки данных.",
            "indicatorMetadataIsEmpty": "Выборка данных отсутствует.",
            "regionsetsIsEmpty": "Не удалось выбрать области для выборки данных.",
            "regionsDataError": "Произошла ошибка при поиске значения области.",
            "regionsDataIsEmpty": "Невозможно получить значения области для выбранных данных.",
            "datasetSave": "Ошибка сохранения набора данных.",
            "datasetDelete": "Ошибка удаления набора данных.",
            "indicatorSave": "Индикатор сохранения ошибок",
            "myIndicatorYearInput": "Поле год не может быть пустым.",
            "myIndicatorRegionselect": "Поле выбора региона не может быть пустым."
        },
        "datacharts": {
            "flyout": "Искомые данные",
            "barchart": "Гистограмма",
            "linechart": "Линейный график",
            "table": "Таблица",
            "desc": "Таблица и графики",
            "nodata": "Индикаторы не были выбраны",
            "indicatorVar": "Переменная, показываемая на графике",
            "descColor": "Цвет графика",
            "selectClr": "Выбранный цвет",
            "clrFromMap": "Цвета по классификации на карте",
            "chooseColor": "Выбрать цвет",
            "sorting": {
                "desc": "Порядок",
                "name-ascending": "Название по возрастанию",
                "name-descending": "Название по убыванию",
                "value-ascending": "Значение по возрастанию",
                "value-descending": "Значение по убыванию"
            }
        },
        "filter": {
            "title": "Фильтр",
            "indicatorToFilter": "Фильтр переменной",
            "condition": "Условие",
            "value": "Значение",
            "variable": "Переменная",
            "conditionPlaceholder": "Выбрать условие",
            "greater": "Больше (>)",
            "greaterEqual": "Больше или равно (>=)",
            "equal": "Равно (=)",
            "lessEqual": "Меньше или равно (<=)",
            "lessThan": "Меньше(<)",
            "between": "Между (исключительно)",
            "filter": "Фильтр значений",
            "desc": "Фильтр по значению",
            "filtered": "Отфильтрованные значения",
            "area": "Фильтр по области"
        },
        "layer": {
            "name": "Ареал обитания на тематической карте",
            "inspireName": "Тематическая карта",
            "organizationName": "Тематическая карта"
        },
        "tab": {
            "title": "Индикаторы",
            "edit": "Редактировать",
            "delete": "Удалить",
            "grid": {
                "name": "Название",
                "edit": "Редактировать",
                "delete": "Удалить"
            },
            "popup": {
                "deletetitle": "Удалить индикатор",
                "deletemsg": "Вы удаляете индикатор \"{name}\". Вы действительно хотите удалить индикатор?",
                "deleteSuccess": "Индикатор удален"
            },
            "button": {
                "cancel": "Отменить",
                "ok": "OK"
            },
            "error": {
                "title": "Ошибка",
                "notfound": "Индикатор не найден.",
                "notdeleted": "Индикатор не был удален."
            }
        },
        "userIndicators": {
            "flyoutTitle": "Добавить новый индикатор",
            "buttonTitle": "Добавить новый индикатор",
            "buttonAddIndicator": "Добавить данные",
            "panelGeneric": {
                "title": "Индикатор данных",
                "formName": "Название",
                "formDescription": "Описание",
                "formDatasource": "Источник данных"
            },
            "panelData": {
                "title": "Статистические данные"
            },
            "dialog": {
                "successTitle": "Сохранено",
                "successMsg": "Данные сохранены."
            },
            "import": {
                "title": "",
                "placeholder": ""
            },
            "notLoggedInTitle": "Предупреждение",
            "notLoggedInWarning": "Без авторизации данные не могут быть сохранены и будут доступны только до перезагрузки страницы. Авторизируйтесь в системе перед добавлением индикатора для сохранения данных.",
            "modify": {
                "title": "Индикатор",
                "edit": "Редактировать",
                "remove": "Удалить"
            }
        },
        'indicatorList': {
            'title': 'Индикаторы',
            'removeAll': 'Remove all',
            'emptyMsg': 'Отсутствуют выбранные индикаторы'
        },
        'sumo': {
            'locale': ['ОК', 'Отменить', 'Выбрать все']
        }
    }
});
