<#import "parts/common.ftlh" as c>
<#import "parts/login.ftlh" as l>

<@c.page>
    <div>
        <@l.logout />
        <span><a href="/user">User list</a></span>
    </div>
    <br/><br/>
    <a href="/">На главную</a>
    <br/><br/>
    <a href="/cinemas/add">Добавить кинотеатр</a>
    <br/><br/>

    <table border=0>
        <tr>
            <th>ID
            <th>Название кинотеатра
            <th>Изменения вносил
            <th>
            <th>
                <#list cinemas as cinema>
        <tr>
            <td><a href="/cinemas/${cinema.cinema_id}">${cinema.cinema_id}</a>
            <td><a href="/cinemas/${cinema.cinema_id}">${cinema.name}</a>
            <td><a href="/cinemas/${cinema.cinema_id}">${cinema.userName}</a>
            <td>
                <a href="/cinemas/${cinema.cinema_id}/edit">
                    <input type="button" value="Изменить"/>
                </a>
            <td>
                <form action="/cinemas/${cinema.cinema_id}/delete" method="POST">
                    <input type="hidden" name="_csrf" value="${_csrf.token}"/>
                    <input type="submit" value="Удалить"/>
                </form>
                <#else>
                    No cinema
                </#list>
    </table>

    <br/><br/>

    <div>Список кинотеатров</div>
    <form method="get" action="/cinemas">
        <input type="text" name="filter" value="${filter}">
        <button type="submit">Найти</button>
    </form>

</@c.page>
