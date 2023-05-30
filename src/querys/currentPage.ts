export default function getCurrentPageTaskQuery(page: string) {
  const query = `
    [:find (pull ?b [*])
            :where
            [?p :block/name "${page}"]
            [?b :block/page ?p]
            [?b :block/marker ?marker]
            [(contains? #{"NOW" "LATER" "TODO" "DOING"} ?marker)]
    ]
  `;

  return query;
}
