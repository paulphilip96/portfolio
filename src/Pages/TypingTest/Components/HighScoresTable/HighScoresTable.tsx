import React from "react";
import { Table } from "antd";
import type { ColumnsType } from 'antd/es/table';

import type { HighScore } from "../../../../Types/TypingTestTypes";

import "./HighScoresTable.scss";


interface HighScoresTableI {
  dataSource: HighScore[],
  loading: boolean
}

const HighScoresTable = ({ dataSource, loading }: HighScoresTableI) => {
  
  const columns: ColumnsType<HighScore> = [
    {
      title: "Rank",
      dataIndex: "key",
      key: "key",
      render: (v) => <React.Fragment>{v + 1}</React.Fragment>
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Score',
      dataIndex: 'score',
      key: 'score',
      sorter: (a, b) => a.score - b.score
    },
  ];

  const dataSourceWithKey = dataSource.map((item, index) => ({ ...item, key: index }));

  return (
    <div className="HighScoresTable">
      <Table 
        columns={columns} 
        dataSource={dataSourceWithKey} 
        pagination={{ pageSize: 5 }}
        loading={loading}
      />
    </div>
  )
}

export default HighScoresTable;