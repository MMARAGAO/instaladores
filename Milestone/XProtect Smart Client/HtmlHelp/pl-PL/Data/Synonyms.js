var xmlSynonymsData = "";
xmlSynonymsData += '<?xml version=\"1.0\" encoding=\"utf-8\"?>';
xmlSynonymsData += '<MadCapSynonyms xml:lang=\"pl-PL\">';
xmlSynonymsData += '    <!-- saved from url=(0016)http://localhost -->';
xmlSynonymsData += '    <Groups>';
xmlSynonymsData += '        <SynonymGroup Stem=\"true\">';
xmlSynonymsData += '            <Word Stem=\"obraz\">obraz</Word>';
xmlSynonymsData += '            <Word Stem=\"wideo\">wideo</Word>';
xmlSynonymsData += '        </SynonymGroup>';
xmlSynonymsData += '    </Groups>';
xmlSynonymsData += '    <Directional>';
xmlSynonymsData += '        <DirectionalSynonym Stem=\"true\" From=\"zmień\" To=\"alter=modify=customise=customize=edit\" FromStem=\"zmień\" />';
xmlSynonymsData += '    </Directional>';
xmlSynonymsData += '</MadCapSynonyms>';
MadCap.Utilities.Xhr._FilePathToXmlStringMap.Add('Synonyms', xmlSynonymsData);
