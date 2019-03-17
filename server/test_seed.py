from sqlalchemy import create_engine
import psycopg2 
import io
import pandas as pd

uri = 'postgresql+psycopg2:///students'
tablename = "students"
engine = create_engine(uri)
tb = pd.read_sql_table(tablename, engine)

tb.head(0).to_sql(tablename, engine, if_exists='replace',index=False) #truncates the table

conn = engine.raw_connection()
cur = conn.cursor()
output = io.StringIO()
tb.to_csv(output, sep='\t', header=False, index=False)
output.seek(0)
contents = output.getvalue()
cur.copy_from(output, tablename, null="") # null values become ''
conn.commit()

engine.execute("INSERT INTO students (0, 1, 'a1adf89a-d46a-414a-acc6-d4603632ea72' 'tom')")

engine.execute("INSERT INTO students VALUES (4, '4a84380c-ea2c-478d-8d1c-9d903698d634', 'lawrence')")
