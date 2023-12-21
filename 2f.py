import pandas as pd
import re
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
from nltk.stem import WordNetLemmatizer
import nltk



# Функция для NLP обработки текста
def nlp_process(text):
    text = text.lower()
    tokens = word_tokenize(text, language='russian')
    tokens = [word for word in tokens if word not in stopwords.words('russian')]
    lemmatizer = WordNetLemmatizer()
    tokens = [lemmatizer.lemmatize(word) for word in tokens]
    return ' '.join(tokens)


# Основной скрипт
if __name__ == "__main__":
    # Загрузка данных
    data = pd.read_excel('/content/Dataset_Zayavki_2019-2020_Respublika_Tatarstan.xlsx')

    text_columns = ['Адрес', 'Описание заявки', 'Категория, присвоенная модератором', 'Последний исполнитель']
    for col in text_columns:
        data[col] = data[col].astype(str).apply(re.sub(r'[^a-zA-Zа-яА-Я0-9.,!? ]', '', data))

    # Удаление строк с пустыми значениями
    data = data.dropna(subset=['Дата подачи заявки', 'Долгота', 'Широта', 'id исполнителя', 'Статус заявки'])

    # Удаление дубликатов
    data = data.drop_duplicates()

    # Преобразование типов данных
    data['id исполнителя'] = data['id исполнителя'].astype(int)

    # NLP обработка
    nlp_columns = ['Адрес', 'Описание заявки', 'Категория, присвоенная модератором']
    for col in nlp_columns:
        data[col] = data[col].apply(nlp_process)

    # Сохранение итоговых данных
    data.to_csv('final_dataset.csv', index=False, encoding='utf-8-sig')