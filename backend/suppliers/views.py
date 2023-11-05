import json

import requests
from bs4 import BeautifulSoup
import ast
from django.http import HttpResponse



def get_external_data(request):
    # URL сайта, который вы хотите парсить
    url = "http://zakupki.gov.kg/popp/view/order/list.xhtml"  # Замените на целевой сайт

    # Инициализируем новый список для обработанных данных
    processed_data = []

    try:
        # Отправить GET-запрос к сайту
        response = requests.get(url)

        # Проверить успешность запроса
        if response.status_code == 200:
            # Используйте BeautifulSoup для извлечения данных
            soup = BeautifulSoup(response.text, "html.parser")

            # Найти блок с классом .ui-datatable-tablewrapper
            table_wrapper = soup.find("div", {"class": "ui-datatable-tablewrapper"})

            # Инициализировать массив для хранения данных таблицы
            table_data = []

            # Найти все строки таблицы
            rows = table_wrapper.find_all("tr")

            for row in rows:
                # Инициализировать массив для хранения данных строки
                row_data = []

                # Найти все ячейки внутри строки
                cells = row.find_all("td")

                for cell in cells:
                    # Извлечь текст из ячейки
                    cell_text = cell.get_text().strip()

                    # Найти все элементы <span> внутри ячейки
                    span_elements = cell.find_all("span")

                    if span_elements:
                        # Если есть элементы <span>, извлечь текст из первого <span> и оставшейся части ячейки
                        span_text = span_elements[0].get_text().strip()
                        remaining_text = cell_text.replace(span_text, "").strip()
                        cell_data = {span_text: remaining_text}

                    # Добавить данные ячейки в массив данных строки
                    row_data.append(cell_data)

                # Удалить пустые элементы внутри строки
                row_data = list(filter(None, row_data))

                # Добавить массив данных строки в массив данных таблицы
                table_data.append(row_data)

            # В этот момент table_data содержит данные таблицы без пустых элементов
            # Вы можете сохранить эти данные в базу данных или передать их в шаблон для отображения

            # Преобразовать данные таблицы в формат, который можно передать в шаблон
            table_data_for_template = []

            # Возвращаем шаблон с данными для отображения
            return HttpResponse(json.dumps(table_data), content_type="application/json")

        else:
            content = "Ошибка при запросе к сайту: " + str(response.status_code)

    except Exception as e:
        content = "Произошла ошибка: " + str(e)
        return HttpResponse(content, content_type="application/json")