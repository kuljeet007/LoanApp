import React from "react";
import { Button, Alert } from "react-native";
import RNFS from "react-native-fs";
import PizZip from "pizzip";
import Docxtemplater from "docxtemplater";
import { downloadFile } from "react-native-blob-util";

const LoanDocumentGenerator = () => {
 
  const generateDocument = async () => {
    try {
      const filePath = `./loanDoc.docx`;

      // Read the document from the file system
      const base64Data = await RNFS.readFile(filePath, "base64");
      const zip = new PizZip(Buffer.from(base64Data, "base64"));
      const doc = new Docxtemplater(zip);
  
      // Replace placeholders
      doc.setData({
        name: "John Doe",
        // loan_amount: "₹50,000",
        // date: new Date().toLocaleDateString(),
      });
  
      // Render the document with new data
      doc.render();
  
      // Convert back to base64
      const generatedDoc = doc.getZip().generate({ type: "base64" });
      const outputPath = `${RNFS.DocumentDirectoryPath}/Loan_Document.docx`;
  
      // Save the generated document
      await RNFS.writeFile(outputPath, generatedDoc, "base64");
  
      Alert.alert("Success", "Document saved at: " + outputPath);
    } catch (error) {
      console.error("Error generating document:", error);
      Alert.alert("Error", "Failed to generate document");
    }
  };
  

  return <Button title="Generate Loan Document" onPress={generateDocument} />;
};

export default LoanDocumentGenerator;
