<#import "parts/common.ftlh" as c>
<#import "parts/login.ftlh" as l>

<@c.page>
    <div
    >
        <@l.logout />
    </div>
    Cinema-edit
    <br/><br/>
    <a href="/cinemas">Вернуться к списку кинотеатров</a>

    <br/>

    <br/> Название кинотеатра <br/>

    <div>
        <form method="post" action="/cinemas/add">
            <input type="text" name="name" placeholder="Введите название кинотеатра"/>
            <#--            <input type="hidden" name="_csrf" value="${_csrf.token}"/>-->
            <#--            <button type="submit">Добавить</button>-->
        </form>
        <br/> Создать зал <br/>
        <form method="post" action="/add_hall">
            <input type="number" name="row" placeholder="Введите количество рядов"/>
            <input type="number" name="place" placeholder="Введите количество мест"/>
        </form>
        <br/>
            <input type="hidden" name="_csrf" value="${_csrf.token}"/>
            <button type="submit">Добавить</button>
    </div>

<#--    <form method="post">-->
<#--        <select class="form-select-button">-->
<#--            <#if cinemaHalls??>-->
<#--                <#list cinemaHalls as hall>-->
<#--                    <option value="${hall.cinemaHall_id}">${hall.toString()}</option>-->
<#--                </#list>-->
<#--            </#if>-->
<#--        </select>-->
<#--    </form>-->

</@c.page>