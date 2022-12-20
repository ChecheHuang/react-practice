# Ch08
## BigListComponent
```javascript !=
使用react-window
使用@faker-js/faker
處理大量資料渲染
```
## <strong>瀑布式請求</strong>
## GithubUserSample
### hooks
``` javascript !=
1. useMountedRef
判斷元件存不存在

製作方法
    使用useRef來初始值false
    useEffect改變current為true
    並useEffect return 時為false
使用方法
    const mounted=useMountedRef();
    console.log(mounted.current)

2.useFetch
傳入uri來撈取資料

製作方法
    傳入uri，如果沒有uri則return
    在fetch各階段判斷mounted
    回傳 loading,data,error
使用方法
const { loading, data, error } = useFetch(uri)

3. useIterator
傳入陣列並且控制陣列

製作方法
    使用useCallback製作prev 和 next 函示並且判斷長度來循環
使用方法
    const [{ name }, previous, next] = useIterator(repositories);
```

### Fetch
```javascript !=
Fetch元件傳入 uri 成功(並且把data傳入) 等待 錯誤 渲染畫面
```

### GithubUserSample1
將login傳入 GitHubUser

#### GitHubUser{login}
```javascript !=
使用Fetch元件
uri={`https://api.github.com/users/${login}`}
renderSuccess={UserDetails}
```

### UserDetails{data}
```javascript !=
顯示data資料
將data.login傳入UserRepositories
```

### UserRepositories{login,selectedRepo,onSelect}
```javascript !=
使用Fetch元件並將資料傳入RepoMenu
    uri={`https://api.github.com/users/${login}/repos`}
    renderSuccess={({ data }) => (
    <RepoMenu
        repositories={data}
        onSelect={onSelect}
        login={login}
    />
```

### RepoMenu{ repositories, login }
```javascript !=
使用useIterator
const [{ name }, previous, next] = useIterator(repositories);
使用previous, next查看repo並將login,name傳入RepositoryReadme
```

### RepositoryReadme{ repo, login }
```javascript !=
使用react-markdown
製作loading及error和data
使用useCallback來製作撈取README資料
const loadReadme = useCallback(async (login, repo) => {
    setLoading(true);
    const uri = `https://api.github.com/repos/${login}/${repo}/readme`;
    const { download_url } = await fetch(uri).then(res => res.json());
    const markdown = await fetch(download_url).then(res => res.text());
    setMarkdown(markdown);
    setLoading(false);
}, []);
useEffect(() => {
    if (!repo || !login) return;
    loadReadme(login, repo).catch(setError);
}, [repo]);
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  if (loading) return <p>Loading...</p>;
  return <ReactMarkdown children={markdown} />;
```




