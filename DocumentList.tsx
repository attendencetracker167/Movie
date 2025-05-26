import React, { useEffect, useState } from 'react';
import { getDocuments } from '../../services/api';
import { DocumentFile } from '../../types/models';

const DocumentList = () => {
  const [documents, setDocuments] = useState<DocumentFile[]>([]);

  useEffect(() => {
    getDocuments().then(setDocuments).catch(console.error);
  }, []);

  return (
    <div>
      <h2>Production Documents</h2>
      <ul>
        {documents.map(doc => (
          <li key={doc.id}>
            <a href={doc.url} target="_blank" rel="noopener noreferrer">
              {doc.name} (v{doc.version}) - {doc.folder}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DocumentList;
